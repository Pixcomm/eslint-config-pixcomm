#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const semver = require('semver');
const { execSync } = require('child_process');

// Read current package.json
const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

// Determine which part to bump based on commit messages
// You can customize this logic as needed
function determineVersionBump() {
  try {
    const lastTag = execSync('git describe --tags --abbrev=0', { stdio: 'pipe' }).toString().trim();
    const commitsSinceTag = execSync(`git log ${lastTag}..HEAD --pretty=format:"%s"`, { stdio: 'pipe' }).toString().trim();

    if (commitsSinceTag.includes('BREAKING CHANGE')) return 'major';
    if (commitsSinceTag.includes('feat:')) return 'minor';
    return 'patch';
  } catch (error) {
    // If no tags exist or other error
    return 'patch';
  }
}

// Bump version based on type
const bumpType = process.argv[2] || determineVersionBump();
const newVersion = semver.inc(currentVersion, bumpType);

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(`Version bumped from ${currentVersion} to ${newVersion}`);

// Run git commands
execSync(`git add package.json`);
execSync(`git commit -m "chore: bump version to ${newVersion}"`);
execSync(`git tag -a v${newVersion} -m "Version ${newVersion}"`);

console.log('Changes committed and tagged');

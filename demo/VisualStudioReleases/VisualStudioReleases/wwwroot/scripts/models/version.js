
class Version {
  constructor(name, codename, versionNumber, releaseDate) {
    this.name = name;
    this.codename = codename;
    this.versionNumber = versionNumber;
    this.releaseDate = releaseDate;
    this.supportedFrameworks = [];
  }

  addSupportedFramework(name, versionNumber) {
    var framework = new Framework(name, versionNumber);
    this.supportedFrameworks.push(framework);
  }
}

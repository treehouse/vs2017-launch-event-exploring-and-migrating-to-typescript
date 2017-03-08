
const data = getData();

let versionsContent = '';

data.forEach(function (version) {
  versionsContent += `<h2>${version.name}</h2>`;

  // TODO Display other version properties.

  // HACK Not sure why calling toLocaleDateString() is failing sometimes.
  // Could be due to an inconsitency in the data.
  let releaseDateString = '';
  try {
    releaseDateString = version.releaseDate.toLocaleDateString();
  } catch (e) {
    console.log(e);
    releaseDateString = version.releaseDate;
  }

  versionsContent += `
    <ul>
      <li>Release Date: ${releaseDateString}</li>
    </ul>
  `;

  if (version.supportedFrameworks.length > 0) {
    let supportedFrameworksContent = '';
    version.supportedFrameworks.forEach(function (framework) {
      const formattedVersionNumber = framework.versionNumber
        .toLocaleString('en-US', { minimumFractionDigits: 1 });
      supportedFrameworksContent += `<li>${framework.name} ${formattedVersionNumber}</li>`;
    });
    versionsContent += `<h4>Supported Frameworks</h4><ul>${supportedFrameworksContent}</ul>`;
  }
});

// NOTE Using jQuery here to demo VS 2017 external library IntelliSense.
$('#versions').append(versionsContent);

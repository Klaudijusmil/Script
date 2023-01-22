const { exec } = require('child_process');

// Install File Server and Web Server roles
exec('powershell Add-WindowsFeature File-Services, Web-Server', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

// Create new folder, file and share
exec('powershell New-Item -ItemType Directory -Path C:\\Share', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

exec('powershell New-Item -ItemType File -Path C:\\Share\\helloworld.txt', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

exec('powershell New-SmbShare -Name Share -Path C:\\Share -FullAccess "Everyone"', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

// Create new website
exec('powershell New-WebSite -Name "helloworld" -Port 80 -PhysicalPath C:\\Share', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

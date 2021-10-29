import { platform } from 'os';
import { join } from 'path';
import { promisify } from 'util';
import { execFile as _execFile } from 'child_process';
import { Binary } from '@binary/type';

const PREFIX = platform() == 'darwin' ? 'dtc/1.6.0' : 'usr';

const HOME = join(__dirname, '..', 'binary');
const execFile = promisify(_execFile);

export default <Binary>{
  homeDir: join(HOME, PREFIX),

  binaryDir: join(HOME, PREFIX, 'bin'),

  env: {},

  async version() {
    const { stdout } = await execFile(join(this.binaryDir!, 'dtc'), ['--version']);
    return stdout.split('\n')[0].trim();
  }
};

import * as download from 'download';
import { rm } from 'fs/promises';
import { platform } from 'os';
import { join } from 'path';

const PREFIX = 'https://cdn.iflyos.cn/public/lisa-binary/dtc/';

const NAME = (() => {
  switch (platform()) {
    case 'win32': return 'dtc-1.5.1-2-windows_x86_64.zip';
    case 'darwin': return 'dtc-1.6.0-mac_amd64.tar.gz';
    default: return 'dtc-1.6.0-1-linux_amd64.tar.gz';
  }
})();

const HOME = join(__dirname, '..', 'binary');

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  await download(`${PREFIX}${NAME}`, HOME, {
    extract: true,
  });

})();

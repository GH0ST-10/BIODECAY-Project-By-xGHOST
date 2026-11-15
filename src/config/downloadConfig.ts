import { DownloadConfig } from '../types';

/* =====================================================================
   DOWNLOAD SETTINGS — update this when a new version of the modpack drops.

   url      Direct Internet Archive file link, in this format:
            https://archive.org/download/<item-id>/<file-name>.zip
            (must be the /download/ link to the file itself, NOT details page)
   version  Optional, e.g. "v1.0.0"
   size     Optional, e.g. "1.2 GB"
   ===================================================================== */
export const DOWNLOAD_CONFIG: DownloadConfig = {
  url: '',
  version: '',
  size: ''
};

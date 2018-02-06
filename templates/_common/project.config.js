module.exports = {
  bucket: 'graphics.texastribune.org',
  folder: 'graphics/change-me',
  files: [
    {
      fileId: '1ehh3ISrwq5lHNQS-eEs_i30Wi7UAF9txWgYTo56NFBI',
      type: 'doc',
      name: 'text',
    },
    {
      fileId: '1EACmSpajC1V7nJtwIxfA9aR-HAbTSDugSjStSSKWEaE',
      type: 'sheet',
      name: 'data',
    },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   */
  dataMutators: {
    // the function name should match one of the `name` values in `files`
    data(originalData) {
      // what you return in this function is what ends up in the JSON file
      return originalData;
    },
  },
};
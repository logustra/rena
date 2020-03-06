module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
    '@babel/preset-typescript'
  ],

  plugins: [
    '@babel/plugin-syntax-object-rest-spread',
    [
      '@babel/plugin-proposal-decorators', {
        'legacy': true
      }
    ],

    [
      '@babel/plugin-proposal-class-properties', {
        'loose': true
      }
    ],

    [
      'module-resolver',
      {
        extensions: ['*', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@@': './src/modules',
          'atoms': './src/components/atoms',
          'molecules': './src/components/molecules',
          'organisms': './src/components/organisms',
          'templates': './src/components/templates'
        }
      }
    ]
  ]
}

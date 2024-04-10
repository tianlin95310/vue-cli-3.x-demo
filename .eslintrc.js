module.exports = {
  root: true,
  env: {
    node: true,
    'es2020': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 缩进空格数
    'vue/script-indent': ['error', 2, {'baseIndent': 1}],
    // 参数名前空格的问题
    'space-before-function-paren': [2, 'never'],
    // 多余的空格问题
    'no-trailing-spaces': ['off'],
    'no-unused-vars': ['off'],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }]
  },
  overrides:[
    	{
    		'files':['*.vue'],
    		'rules':{
    			'indent':'off'
    		}
    	}
    ]
}

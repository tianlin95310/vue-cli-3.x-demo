module.exports = {
  root: true,
  env: {
    node: true
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
    'vue/script-indent': ['error', 2, {'baseIndent': 1}]
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

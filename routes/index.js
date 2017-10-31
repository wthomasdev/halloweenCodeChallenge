var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send('hello');
});

router.put('/', function (req, res, next) {
  console.log(req.body)
  res.json(generateResponse(req.body.expr))
})

const getOperatorCount = expression => {
  let operators = []
  if (expression.includes('AND')) operators.push('AND')
  if (expression.includes('OR')) operators.push('OR')
  return operators.length
}

const generateResponse = expression => {
  let response = {}
  let andRe = /AND/gi;
  let orRe = /OR/gi;
  const numberOfOperators = getOperatorCount(expression)
  if (numberOfOperators === 1) {
    const variables = 2
    const combinations = 2*2
    response.evaluation = generateValues(combinations)
  } 
  
  if (numberOfOperators === 2) {
    const variables = 3
    const combinations = 2*2*2
    response.evaluation = generateValues(combinations)    
    
  }
  response.formula = expression.replace(andRe, '&&').replace(orRe, '||')
  return response
}

const generateValues = (combinations) => {
  let stuff = []
  for (let i = 0; i <= combinations; i++) {
    let values = 'true, false, false'
    stuff.push({
      values,
      result: eval(values)
    })
    
  }
  return stuff
}

const getResult = (values) => {
  return eval(values)
}


module.exports = router;

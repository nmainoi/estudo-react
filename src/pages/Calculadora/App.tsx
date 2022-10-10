import { useState, useEffect } from "react";

import "./App.css";
import { TextField, Button } from "@mui/material";
enum operators {
  subtract,
  sum,
  round,
  multiply,
  none

}
enum AcSate{
  C = "C",
  AC = "AC",

}
function Calculator() {
  const [acSate, updateAcState] = useState(AcSate.AC);

  const [result, UpdateResult] = useState<string>("");
  const [memoryOperator, UpdateMemoryOperator] = useState<operators>(operators.none);
  const [lastResult, UpdateLastResult] = useState<string>("");

  useEffect(() => {
    if(lastResult == '')
      updateAcState(AcSate.AC);
      else
      updateAcState(AcSate.C);

  },
  [lastResult]);

  const SetResult = () => {
    
    if (memoryOperator != operators.none && result != '' && lastResult != '') {

      switch (memoryOperator) {       
        case operators.sum:
          UpdateResult( (Number.parseFloat(lastResult) + Number.parseFloat(result)).toString() );
          break;
        case operators.subtract:
          UpdateResult( (Number.parseFloat(lastResult) - Number.parseFloat(result)).toString() );
          break;
        case operators.round:
          UpdateResult( (Number.parseFloat(lastResult) / Number.parseFloat(result)).toString() );
          break;
        case operators.multiply:
          UpdateResult( (Number.parseFloat(lastResult) * Number.parseFloat(result)).toString() );
          break;
        
        default:
          break;
      }
      UpdateMemoryOperator(operators.none)
    }  

  }

  const ClearAll = () => {
    UpdateResult('') 
    UpdateMemoryOperator(operators.none)
    UpdateLastResult('')
  }

  const ACFunc = () =>{
    if(result != '' )
     UpdateResult('')
     else
     ClearAll()


  }

  const setOperator = (operator: operators) => {
    console.log(memoryOperator, result,lastResult);
    if (memoryOperator == operators.none )   
      UpdateLastResult(result)
          
    UpdateMemoryOperator(operator)
    UpdateResult('0')
    console.log(memoryOperator, result,lastResult);
  }

  const UpdateNumber = (x: string) => {
    if (result !== '0')
      UpdateResult(result + x)
    else
      UpdateResult(x)
  }
  const UpdateDot = () => {
    if (!result.includes('.'))
      UpdateResult(result + '.')
  }


  return (
    <div className="App">
      <div className="AppBody">
        <div className="Header">
          <TextField
            id="lined"
            label={result}
            variant="outlined"
            InputProps={{
              readOnly: true,
              disabled: true,
            }}
          />
          <Button color="success" variant="contained" onClick={() => SetResult()}>
            =
          </Button>
        </div>
        <div className="Content">
          <div className="numbers">
            <div className="rowNumber">
              <Button color="success" variant="contained" onClick={() => UpdateNumber('7')}>
                7
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('8')}>
                8
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('9')}>
                9
              </Button>
            </div>
            <div className="rowNumber">
              <Button color="success" variant="contained" onClick={() => UpdateNumber('4')}>
                4
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('5')}>
                5
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('7')}>
                6
              </Button>
            </div>
            <div className="rowNumber">
              <Button color="success" variant="contained" onClick={() => UpdateNumber('1')}>
                1
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('2')}>
                2
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('3')}>
                3
              </Button>
            </div>
            <div className="rowNumber">
              <Button color="success" variant="contained" onClick={() => ACFunc()}>
                {acSate}
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateNumber('0')}>
                0
              </Button>
              <Button color="success" variant="contained" onClick={() => UpdateDot()} >
                .
              </Button>
            </div>
          </div>
          <div className="Operators">
            <Button color="success" variant="contained" onClick={() => setOperator(operators.round)}>
              /
            </Button>
            <Button color="success" variant="contained" onClick={() => setOperator(operators.multiply)}>
              x
            </Button>
            <Button color="success" variant="contained" onClick={() => setOperator(operators.subtract)}>
              -
            </Button>
            <Button color="success" variant="contained" onClick={() => setOperator(operators.sum)}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

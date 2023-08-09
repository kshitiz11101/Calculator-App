import { Button } from "../Buttons/MyButton"
import { MyOutput } from "../Output/MyOutput"
import { useState } from "react";
export const CalcPage = () => {


    const [inp, updateArea] = useState('');

    const func = (val) => {
        if (val == 'AC') {
            updateArea('');
        }
        else if (val == '=') {
            try {
                updateArea(eval(inp).toString());
            } catch (error) {
                updateArea('ERROR');
            }


        }
        else if (val == 'Back') {
            let len = inp.length - 1;

            updateArea(inp.substring(0, len));
        }


        else {
            updateArea(inp + val);

        }

        console.log(inp);
    }

return (
    <div className="container text-center">
        <center><MyOutput show={inp} />

            <div className="row">
                <div className="col">
                <Button val="(" className="btn btn-success m-1" fn={func} input={inp}></Button>
                    <Button val=")" className="btn btn-success m-1" fn={func} input={inp}></Button>
                    <Button val="%" class="btn btn-success m-1" fn={func} input={inp}></Button>
                    <Button val="AC" class="btn btn-success m-1" fn={func} input={inp}></Button>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <Button val="7" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="8" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="9" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="/" class="btn btn-light m-1" fn={func} input={inp}></Button>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <Button val="4" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="5" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="6" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="*" class="btn btn-light m-1" fn={func} input={inp}></Button>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <Button val="1" class="btn btn-light m-1" fn={func} input={inp} ></Button>
                    <Button val="2" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="3" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="-" class="btn btn-light m-1" fn={func} input={inp}></Button>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button val="0" class="btn btn-light m-1" fn={func} input={inp} ></Button>
                    <Button val="." class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="=" class="btn btn-light m-1" fn={func} input={inp}></Button>
                    <Button val="+" class="btn btn-light m-1" fn={func} input={inp}></Button>

                </div>

            </div>
                <Button fn={func} input={inp} val='Back'  />
        </center>
    </div>

)
}
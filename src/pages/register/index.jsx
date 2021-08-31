import React from 'react';
import './style.css';

const Register = () => {
    return (
        <div>

            <div className="main">
                <p className="sign" align="center">Sign Up</p>
                <form id="login" method="get" action="login.php" className="form1">

                    <input type="text" name="Uname" className="un" placeholder="Username" />
                    <br></br>

                    <input type="Password" name="Pass" className="pass" placeholder="Password" />
                    <br></br>

                    <input type="Password" name="Pass" className="pass" placeholder="Confirm Password" />
                    <br></br>

                    <input type="button" name="log" id="log" value="Submit" className="submit" />
                    <br></br>
                    {/* <input type="checkbox" id="check" /> */}
                    <br></br>
                </form>


            </div>

        </div>
    );
};

export default Register;



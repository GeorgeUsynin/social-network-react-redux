import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog_items}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    George
                </div>
                <div className={classes.dialog}>
                    Paul
                </div>
                <div className={classes.dialog}>
                    Natasha
                </div>
                <div className={classes.dialog}>
                    Alexander
                </div>
                <div className={classes.dialog}>
                    Vladislav
                </div>
                <div className={classes.dialog}>
                    Valera
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How is your wellness?</div>
                <div className={classes.message}>Where do you go?</div>
            </div>
        </div>
    )
}

export default Dialogs;
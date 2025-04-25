

import styles from './Button.module.css'
function  Button(){

    const styles = {
        backgroundColor:"antiquewhite",
        fontSize: "20px",
        color:"blue",
        padding:" 10px 20px",
        border: "none",
        borderRadius:"5px",
        cursor:"pointer"
    }
    return(
        <>
        <button style={styles}>Click me</button>

        </>
    )
}
export default Button
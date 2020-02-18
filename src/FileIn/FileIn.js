import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
//import Form from '@material-ui/core/FormGroup'
//import Label from '@material-ui/core/FormLabel
const FileIn = () => {

let fileReader;


const  handleFile = (file) => {
    console.log("wow neat", file)
    fileReader = new FileReader()
    fileReader.onloadend = doFileRead
    console.log(fileReader.readyState)
    fileReader.readAsText(file)

    console.log(fileReader.readyState)
}


 const doFileRead = (e) => {
    console.log(fileReader.readyState)
    const fileContent = fileReader.result    
    alert(fileContent)
    console.log("file content: ", fileContent)

}


//thank you Ilona https://medium.com/@ilonacodes/front-end-shorts-how-to-read-content-from-the-file-input-in-react-17f49b293909

    // return(<div>
    //     <form onSubmit={this.handlesSubmit}>
    //         <label>Please give me a file:
    //             <textarea value={this.state.readValues}/>     
    //             <Input 
    //                 name="csvFiles" 
    //                 type="file" 
    //                 accept=".csv"
    //                 id='file'/>
    //         </label>
    //     </form> 
    //     </div>          
    return (
    <div className ='upload'>
        <input 
            type='file'
            id='file'
            accept='.txt'
            onChange={e => handleFile(e.target.files[0])}/>
            <p>

            </p>
    </div> )   
};
export default FileIn;
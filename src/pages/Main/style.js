import styled from 'styled-components';

export const Principal = styled.main`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-59%, -50%);
    display: grid;
    grid-template-columns: .25fr .75fr; 
    width: 100%;
    max-width: 800px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    button{
        margin-top: 20px;
        padding: 20px 10px; 
        border-radius: 4px;
        color: #707070;
        background-color: lightgreen;
        border: none;
        box-shadow: 0 10px 10px #00000015;
        float: right;
        font-weight: bold;
        cursor: pointer;
        
    }
`
export const Text = styled.textarea`
    padding: 10px;
    border: none;
    box-shadow: 0 8px 10px #00000014;
    border-radius: 4px;
    resize: none;
    font-family: "Nunito", Arial;
    height: 200px;
    font-size: 18px;
`
export const Todo = styled.div`
    display: flex;
    grid-column-start: 2;
    flex-direction: column;
    margin-left: 20px;
     content{
        box-shadow: 0 8px 10px #00000007;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        & div:nth-child(odd){
            max-width: 300px;
        }
    }
`
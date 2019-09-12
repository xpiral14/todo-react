import styled from 'styled-components';

export const Principal = styled.main`

    box-sizing: border-box;
    position: relative;
    display: grid;
    grid-template-columns: .25fr .50fr .25fr; 
    width: 100%;
    margin: 50px auto 0 auto;
    max-width: 1000px;
    border: thin solid #70707020;
    padding: 10px;
    border-radius: 4px;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
    button{
        float: right;
        
    }
`
export const Text = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: none;
    box-shadow: 0 8px 10px #00000014;
    border-radius: 4px;
    resize: none;
    font-family: "Nunito", Arial;
    height: 200px;
    font-size: 18px;
`
export const Todos = styled.div`
    display: flex;
    grid-column-start: 2;
    flex-direction: column;
    max-height: 400px;
    overflow-y: scroll;
    margin-left: 20px; 
    ::-webkit-scrollbar {
        width: 10px;
        } 
     content{
        box-shadow: 0 8px 10px #00000007;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        
        div:nth-child(odd){
            max-width: 300px;
        }
        div:nth-child(even){
            display: flex;
            align-items: center;
            p{
                margin-right: 20px;
            }
    
        }
    }
`
export const Filters = styled.div`
    grid-column-start: 3;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex:1;
`
export const Button = styled.button`
    
        margin-top: 20px;
        padding: 20px 10px; 
        border-radius: 4px;
        color: #707070;
        background-color: lightgreen;
        border: none;
        box-shadow: 0 10px 10px #00000015;
        font-weight: bold;
        cursor: pointer;
`
export const Counter = styled.p`
    position: absolute;
    right: 20px;
    bottom: 20px;
`
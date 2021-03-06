import styled from 'styled-components';

export const Todo = styled.div`
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
                cursor: pointer;
            }
        }
        p{
            color: ${props => props.important ? "#fff" : "#707070"};
            
            text-decoration: ${props => props.important === true ? "underline" : "none"};
            font-weight: ${props => props.important === true ? "bold" : "normal"};
        }
`
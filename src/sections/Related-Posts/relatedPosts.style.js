import styled from "styled-components";


const RelatedPostsWrapper = styled.div`
        .widgets-title{
            margin-bottom: 20px;
            margin-left: 5px;
            h3{
                display: inline-block;
                font-size: 25px;
                font-weight: 500;
                line-height: 30px;
                position: relative;
                &:before{
                    position: absolute;
                    top: 50%;
                    right: -80px;
                    content: '';
                    width: 70px;
                    height: 1px; 
                }
            }
            
        }
        .allBlogsCard{
            height:100%;      
            a{
                justify-content: center;
                margin-top: 48%;
                font: 400 25px "Open Sans", sans-serif;
                color: rgb(0,0,0);
                display: flex;
                align-items: center;
                transition: all 0.3s linear;
                svg{
                    margin-left: 0px;
                    font-size: 27px;
                    transition: all 0.3s linear;
                }
                &:hover{
                    color: #00D5A7;
                    svg{
                        margin-left: 3px;
                            transform: scale(1.2);
                    }
                }
                
            }
        }
        
`;

export default RelatedPostsWrapper;

function App1(){
    return(
        <div>
            <h3>Main component</h3>
            <h1>Dummyy...!!!</h1>
            <App2 msg="WELCOME dummy!!!"></App2>
            
        </div>
    )
}
 
function App2(props){
    return(
        <div>
            <h3>Parrent element {props.msg}</h3>
            <App3 value={props.msg}></App3>
        </div>)
}
function App3({value}){
    return(
        <div>
            <h3>child element{value}</h3>
            <App4 data={value}></App4>
        </div>
    )
}
function App4({data}){
    return(
        <div>
            
            <h3>nth child element {data}</h3>
        </div>
    )
}

export default App1;





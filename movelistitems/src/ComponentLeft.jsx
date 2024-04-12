import "./styles.css";


export default function ComponentLeft({children}) {
    return (
        <div className="left-container" id="left_container">
            {children}
        </div>
    );
}

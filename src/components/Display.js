function Display({ charLength }) {
    let password = 'Generated password';

    return (
        <div className="container p-3">
            <div className="display">
                {password}
                <i className="bi bi-clipboard"></i>
            </div>
        </div>
    );
}

export default Display;

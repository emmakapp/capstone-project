

export function ErrorMessage({ children, error }) 
{
    return (
        <p className={ error ? "error-message visible" : "error-message hidden" }>
        {children}
        </p>
    )
}


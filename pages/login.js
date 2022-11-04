
export default LoginPage;

function LoginPage() {


  return (
    <>
    <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                <div>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" />
                            {/* <div className="invalid-feedback">{errors.username?.message}</div> */}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" />
                            {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
                        </div>
                        {/* <button disabled={formState.isSubmitting} className="btn btn-primary">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button> */}
                        {/* <Link href="/account/register" className="btn btn-link">Register</Link> */}
                    </div>
                </div>
            </div>
    </>
  )
}
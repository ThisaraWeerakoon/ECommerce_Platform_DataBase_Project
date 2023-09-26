import React from 'react'

const AuthenticationPageHeader = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1 align="center" style={{fontFamily: 'Papyrus', color: '#808080', fontWeight: 'bold', fontSize: '50px'}}>Food Before Me</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">&nbsp;</div>
    </div>
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default" style={{backgroundColor: '#C0C0C0'}}>
          <div className="panel-body" style={{backgroundColor: '#C0C0C0'}}>
            <h2 className="h2" align="center" style={{color: '#FFFFFF'}}>WELCOME  BACK!</h2>
            <div className="row">
              <div className="col-md-12">
                <h4 className="h4" style={{color: '#FFFFFF'}}>Sign into Account</h4>
                <div id="alertmsg" />
              </div>
              <form action="../controller/my_login_controller.php?status=login" method="post">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" name="username" id="username" placeholder="Email" style={{height: '50px'}} />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">&nbsp;</div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" style={{height: '50px'}} />
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock" />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">&nbsp;</div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button className="btn btn-block" style={{backgroundColor: '#808080', color: '#FFFFFF'}}>Log in</button>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-12">&nbsp;</div>
              </div>
              <a href="../view/my_user_signup.php" style={{color: '#FFFFFF', textAlign: 'center'}}>New Here? Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default AuthenticationPageHeader

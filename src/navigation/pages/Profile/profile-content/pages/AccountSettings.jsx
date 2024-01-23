import React from 'react';
import "./AccountSettings.css";
const AccountSettings = () => {
  return (
    <div class="container">
<div class="row justify-content-center">
    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <h2 class="h3 mb-4 page-title">Settings</h2>
        <div class="my-4">
            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Profile</a>
                </li>
            </ul>
            <form>
                <div class="row mt-5 align-items-center">
                   <center> <div class="col-md-3 text-center mb-5">
                        <div class="avatar avatar-xl">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="avatar-img rounded-circle" />
                        </div>
                    </div></center>
                    <div class="col">
                        <div class="row align-items-center">
                            
                        </div>
                    </div>
                </div>
                <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstname">Firstname</label>
                        <input type="text" id="firstname" class="form-control" placeholder="Brown" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastname">Lastname</label>
                        <input type="text" id="lastname" class="form-control" placeholder="Asher" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="brown@asher.me" />
                </div>
                <div class="form-group">
                    <label for="inputAddress5">Address</label>
                    <input type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCompany5">Company</label>
                        <input type="text" class="form-control" id="inputCompany5" placeholder="Nec Urna Suscipit Ltd" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState5">State</label>
                        <select id="inputState5" class="form-control">
                            <option selected="">Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip5">Zip</label>
                        <input type="text" class="form-control" id="inputZip5" placeholder="98232" />
                    </div>
                </div>
                <hr class="my-4" />
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputPassword4">Old Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword5">New Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <div class="form-group">
                            <label for="inputPassword6">Confirm Password</label>
                            <input type="password" class="form-control" id="inputPassword6" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <p class="mb-2">Password requirements</p>
                        <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                        <ul class="small text-muted pl-4 mb-0">
                            <li>Minimum 8 character</li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>Can’t be the same as a previous password</li>
                        </ul>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save Change</button>
            </form>
        </div>
    </div>
</div>

</div>
    
  );
};

export default AccountSettings;
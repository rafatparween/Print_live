import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function LoginSignupPage({ showModal, hideModal }) {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title className="border border-blue-50 w-[100%] gap-1 flex justify-around rounded-md">
            <button
              onClick={() => setShowSignup(true)}
              className=" w-[50%] p-2 rounded-md"
              style={{ backgroundColor: showSignup ? '#60a5fa' : '' }}
            >
              LOGIN
            </button>
            <button
              onClick={() => setShowSignup(false)}
              className="w-[50%] p-2 rounded-md"
              style={{ backgroundColor: showSignup ? '' : '#60a5fa' }}
            >
              SIGNUP
            </button>
          </Modal.Title>
        </Modal.Header>

        {/* ----------- LOGIN PAGE -------------- */}
        {showSignup ? (
          <Modal.Body>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>
          </Modal.Body>
        ) : (
          /* ----------- SIGNUP PAGE -------------- */
          <Modal.Body>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Signup
              </button>
            </form>
          </Modal.Body>
        )}
        {/* ------------- SIGNUP PAGE CODE END-------------  */}
      </Modal>
    </>
  );
}

import React from "react";

function Content() {
  return (
    <div className="search-form">
      <div className="container pl-0 pr-0">
        <div className="row">
          <div className="col-lg-4 mr-auto form-container pl-0">
            <form className="mr-auto">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Pick Form</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Mirpur 1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Pick Form</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Dhanmondi"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </form>
          </div>
          <div className="col-lg-8 mr-auto p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616526141574!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

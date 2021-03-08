import React from 'react';

const ContactArea = () => {
  return (
    <div className="col-md-5">
      <div className="col p-2">
        <div className="p-2 shadow-sm rounded bg-white mb-2  bg-light d-flex align-items-center box-border">
          <div className="p-4 bg-brand rounded-circle text-light">
            <i className="bi bi-envelope-open-fill "><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
              fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
              <path
                d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
            </svg></i>
          </div>
          <div className="ps-4">
            <p>
              <a href="https://www.techdynobd.com/">www.techdynobd.com/</a> <br />
              <a href="mailto:teamtechdyno@gmail.com">teamtechdyno@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="col p-2  ">
        <div className="p-2 shadow-sm rounded bg-white mb-2  bg-light d-flex align-items-center box-border">
          <div className="p-4 bg-brand rounded-circle text-light">
            <i className="bi bi-envelope-open-fill "><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
              fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg></i>
          </div>
          <div className="ps-4">
            <p>
              2nd Floor House: H 79, <br />
                Block: G Chairman Bari New Airport Road,Banani
                Dhaka - 1213
              </p>
          </div>
        </div>
      </div>
      <div className="col p-2  ">
        <div className="p-2 shadow-sm rounded bg-white mb-2  bg-light d-flex align-items-center box-border">
          <div className="p-4 bg-brand rounded-circle text-light">
            <i className="bi bi-envelope-open-fill "><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
              fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg></i>
          </div>
          <div className="ps-4">
            <p>
              <a href="tel:+08801686276704">01686-276704</a><br />
              <a href="tel:+08801980653626">01980-653626</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
import React from 'react';
import { Find } from '../api/API';
import { useRouter } from 'next/router';

export default function Search() {
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        let mssv = document.getElementById('mssv').value;
        let code = document.getElementById('code').value;

        let rs = Find(mssv, code);

        if (rs !== -1) {
            router.push('/result/' + rs);
        } else {
            alert('Tìm không thấy, bạn kiểm tra lại thông tin nhé.');
        }
    };

    return (
        <>
            <div className="body">
                <div className="container content p-md-5 pb-4 rounded">
                    <img src="/LogoITEC.png" alt="logo" className="logo" />
                    <h3 className="text-center title">
                        Check your information
                    </h3>
                    <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label for="mssv">MSSV:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mssv"
                                aria-describedby="emailHelp"
                                placeholder="Nhập MSSV"
                            />
                        </div>
                        <div className="form-group">
                            <label for="code">Mã dự thi:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="code"
                                placeholder="Nhập 3 số cuối mã dự thi"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-3 w-100 btn btn-primary"
                            javascript=";;"
                        >
                            Kiểm tra
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

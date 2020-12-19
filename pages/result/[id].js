import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getById } from '../api/API';

export default function KetQua({ Header }) {
    const [info, setInfo] = useState({});
    const router = useRouter();

    useEffect(() => {
        let id = router.query.id;
        let rs = getById(id);
        if (rs) setInfo(rs);
    }, []);
    return (
        <>
            <Header />
            <div className="body">
                <div className="container content p-md-5 rounded pb-4">
                    <img src="/LogoITEC.png" alt="logo" className="logo" />
                    <h2 className="text-center title">Your information</h2>
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5 class="card-title">Thông tin</h5>
                            {info.id ? (
                                <>
                                    <p class="card-text">
                                        <b>Họ tên: </b>
                                        {info.firstname} {info.name}
                                    </p>
                                    <p class="card-text">
                                        <b>MSSV: </b>
                                        {info.id_student}
                                    </p>
                                    <p class="card-text">
                                        <b>Khoa: </b>
                                        {info.faculty}
                                    </p>
                                    <p class="card-text">
                                        <b>Ca thi: </b>
                                        {info.time == 's'
                                            ? 'Ca sáng 8g bắt đầu thi'
                                            : 'Ca chiều 14g bắt đầu thi'}
                                    </p>
                                    <p class="card-text">
                                        <b>Mã dự thi: </b>
                                        {info.id_code}
                                    </p>
                                    <p class="card-text">
                                        <b>SĐT: </b>
                                        {info.phone || 'Không có'}
                                    </p>
                                </>
                            ) : (
                                'Vui lòng không tải lại trang này!!!'
                            )}
                            <div class="alert alert-danger" role="alert">
                                Các bạn nhớ đến sớm hơn từ 20-30 phút
                            </div>
                            <Link href="/" class="w-100 btn btn-primary">
                                Go back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

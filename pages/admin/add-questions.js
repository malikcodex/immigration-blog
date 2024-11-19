import Layout from '@/component/Layout';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { makeRequest, make_msg, change_str_to_title, change_str_to_slug } from '@/core/util';
import { getQuestionsById } from '@/core/db';

const AddQuestions = ({qan}) => {
    const [id, changeId] = useState(null);
    const [input, changeInput] = useState(null);
    const [output, changeOutput] = useState(null);
    const btnRef = useRef(null);
    
    useEffect(() => {
        if(qan && !qan.notFound) {
            qan.map(async(d, k) => {
                changeId(d._id);
                changeInput(d.input);
                changeOutput(d.output);
            })
        }
    }, [qan]);

    async function addSubmit(e) {
        e.preventDefault();
        if(btnRef.current) {
            btnRef.current.classList.add("disable");
        }
        let data = JSON.stringify({
            id: id,
            input: change_str_to_title(input),
            output: change_str_to_title(output)
        });

        let res = await makeRequest("/api/add-qan", data);
        make_msg("Notice !" , res.msg , res.status)
        if(btnRef.current) {
            btnRef.current.classList.remove("disable");
        }
    }
    return (
        <Layout title='Add Bot Q&A' description='Manage your bot learning by adding question and answers' meta='no' keywords='Add Categories, Upload Categories, Categorized Content'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="fs-1 fw-bold lh-base mb-4">Add (Question & Answers) To manage your bot learning</h2>
                                <form onSubmit={addSubmit} className="col-12">
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Question</h2>
                                    <input type="text" onChange={(e) => changeInput(e.target.value || '')} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={input} />

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Answer</h2>
                                    <input type="text" onChange={(e) => changeOutput(e.target.value || '')} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={output}/>
                                    
                                    {/* add more boxes */}
                                    <div className="d-flex py-3 gap-3 align-items-center">
                                        <button ref={btnRef} className="btn bg-brown btn-md text-white mb-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddQuestions;
export async function getServerSideProps(context) {
    const {id} = context.query || null;
    let qan = await getQuestionsById({id: id});
    return {
        props: {
            qan
        }
    }
}
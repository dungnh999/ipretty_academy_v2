import React, { useState } from 'react';
import start from 'academy/assets/icons/start'
import start_full from 'academy/assets/icons/start_full'
import reply from 'academy/assets/icons/reply'
import previous from 'academy/assets/icons/previous'
import next from 'academy/assets/icons/next'
import Pagination from "academy/components/UI/Pagination";
const TabsCourse = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const tabs = [
        {
            name: 'Overview',
            content: `LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                      LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                      No comments yet! You be the first to comment.`,
        },
        {
            name: 'Curriculum',
            content: <div>
                        <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                        <div className="list-lessons flex gap-[0.75rem] flex-col mt-[1.25rem]">
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']" open>
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-['']">
                                    <summary
                                        className="py-[1rem] px-[1.25rem] flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <div className='flex gap-[0.5rem]'>
                                            <svg
                                                className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M18 12H6"></path>
                                                <path className="group-open:hidden" d="M12 6v12"></path>
                                            </svg>
                                            Lessons with video content
                                        </div>
                                        <div className='box-time flex gap-[1.25rem] mr-[0.5rem] font-normal	leading-normal'>
                                            <div>5 Lessons</div>
                                            <div>45 Mins</div>
                                        </div>
                                    </summary>
                                    <div className="">
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                        <div className='pl-[2.75rem] pr-[1.25rem] py-[1rem] flex gap-[0.5rem] justify-between'>
                                            <div className="flex gap-[0.5rem] items-center text-black font-normal">
                                                <span className="material-symbols-outlined">file_copy</span>
                                                <div>Lessons with video content</div>
                                            </div>
                                            <div className='flex gap-[1.25rem] items-center'>
                                                <button className="bg-blue-700 py-[0.25rem] px-[0.75rem] rounded-lg text-sm font-normal text-white leading-normal">Preview</button>
                                                <span className="leading-none text-sm font-normal">10:26</span>
                                                {/*<span className="material-symbols-outlined">done</span>*/}
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>,
        },
        {
            name: 'Instructor',
            content: <div className='flex flex-col gap-[1.25rem]'>
                        <div className='flex gap-[1.5rem]'>
                            <div className='box-image w-[11.25rem] bg-black rounded-2xl overflow-hidden'>
                                <img src='' className='h-full w-full'/>
                            </div>
                            <div className='flex flex-col gap-[0.75rem] flex-1'>
                                <h1 className="text-2xl">ThimPress</h1>
                                <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                                <ul>
                                    <li>156 Students</li>
                                    <li>20 Lessons</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis fugit incidunt odit quibusdam sed temporibus veniam! Amet aperiam culpa cumque excepturi id itaque natus odio provident vitae voluptates! Sit?</p>
                        </div>
                        <div className="flex gap-[0.75rem]">
                            <div>Follow : </div>
                            <div>
                                <a href="">
                                    1
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    2
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    3
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    4
                                </a>
                            </div>
                        </div>
                     </div>,
        },
        {
            name: 'FAQs',
            content: <div className='flex flex-col gap-[1.25rem]'>
                        <div className="list-lessons flex gap-[0.75rem] flex-col">
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem]" open>
                                    <summary
                                        className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                        <svg
                                            className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 12H6"></path>
                                            <path className="group-open:hidden" d="M12 6v12"></path>
                                        </svg>
                                    </summary>
                                    <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="list-lessons flex gap-[0.75rem] flex-col">
                    <div className='bg-whiteColor rounded-lg item-lessons'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem] ">
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>
                </div>
                        <div className="list-lessons flex gap-[0.75rem] flex-col">
                            <div className='bg-whiteColor rounded-lg item-lessons'>
                                <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem] ">
                                    <summary
                                        className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                        <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                        <svg
                                            className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 12H6"></path>
                                            <path className="group-open:hidden" d="M12 6v12"></path>
                                        </svg>
                                    </summary>
                                    <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="list-lessons flex gap-[0.75rem] flex-col">
                    <div className='bg-whiteColor rounded-lg item-lessons'>
                        <details className="group marker:content-[''] py-[1.25rem] px-[1.88rem] ">
                            <summary
                                className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-primaryColor [&amp;::-webkit-details-marker]:hidden">
                                <p className='text-sm font-semibold'>What Does Royalty Free Mean?</p>
                                <svg
                                    className="h-6 w-6 flex-none stroke-slate-700 group-open:stroke-primaryColor"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 12H6"></path>
                                    <path className="group-open:hidden" d="M12 6v12"></path>
                                </svg>
                            </summary>
                            <div className="mt-[1.25rem] text-base font-normal text-subColor">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut beatae corporis distinctio id impedit incidunt ipsa iusto nostrum nulla quam, quasi quis sapiente tempore ullam ut vitae voluptatum?
                            </div>
                        </details>
                    </div>
                </div>
                     </div>,
        },
        {
            name: 'Reviews',
            content: <div className="flex gap-[1.25rem] flex-col">
                        <div>
                            <p className='font-semibold capitalize text-xl'>comments</p>
                        </div>
                        <div className='flex gap-[0.75rem] items-center'>
                            <p className='text-3xl font-semibold'>5.0</p>
                            <div className='flex flex-col'>
                                <div className='flex gap-[0.25rem]'>
                                    <img src={start_full} className='h-[1.25rem] w-[1.25rem]'/>
                                    <img src={start_full} className='h-[1.25rem] w-[1.25rem]'/>
                                    <img src={start_full} className='h-[1.25rem] w-[1.25rem]'/>
                                    <img src={start_full} className='h-[1.25rem] w-[1.25rem]'/>
                                    <img src={start_full} className='h-[1.25rem] w-[1.25rem]'/>
                                </div>
                                <p className='text-subColor font-normal text-sm'>based on 146,951 ratings</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[1rem]'>
                            <div className='flex gap-[1.25rem] items-center'>
                                <div className='flex gap-[0.5rem] items-center'>
                                    <div className='flex gap-[0.25rem]'>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                    </div>
                                    <div>90%</div>
                                </div>
                                <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                    <div className="bg-yellowColor h-[0.54769rem]" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className='flex gap-[1.25rem] items-center'>
                                <div className='flex gap-[0.5rem] items-center'>
                                    <div className='flex gap-[0.25rem]'>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                    </div>
                                    <div>50%</div>
                                </div>
                                <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                    <div className="bg-yellowColor h-[0.54769rem]" style={{ width: '50%' }}></div>
                                </div>
                            </div>
                            <div className='flex gap-[1.25rem] items-center'>
                                <div className='flex gap-[0.5rem] items-center'>
                                    <div className='flex gap-[0.25rem]'>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                    </div>
                                    <div>20%</div>
                                </div>
                                <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                    <div className="bg-yellowColor h-[0.54769rem]" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                            <div className='flex gap-[1.25rem] items-center'>
                                <div className='flex gap-[0.5rem] items-center'>
                                    <div className='flex gap-[0.25rem]'>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start_full} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                    </div>
                                    <div>10%</div>
                                </div>
                                <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                    <div className="bg-yellowColor h-[0.54769rem]" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                            <div className='flex gap-[1.25rem] items-center'>
                                <div className='flex gap-[0.5rem] items-center'>
                                    <div className='flex gap-[0.25rem]'>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                        <img src={start} className='h-[1rem] w-[1rem]'/>
                                    </div>
                                    <div>90%</div>
                                </div>
                                <div className="flex-1 bg-bgLigthGrey h-[0.54769rem]">
                                    <div className="bg-yellowColor h-[0.54769rem]" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className='list-comment '>
                            <div className='flex flex-col gap-[1.25rem]'>
                                <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                                    <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                        <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
                                    </div>
                                    <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-sm font-semibold'>Laura Hipster</h1>
                                                <p className='text-sm font-normal text-subColor'>October 03, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-base text-subColor font-normal'>
                                                Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                                            </p>
                                        </div>
                                        <div className='flex gap-[0.5rem] items-center'>
                                            <img src={reply} alt='Lỗi ảnh' />
                                            <span className='text-sm font-normal'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                                    <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                        <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
                                    </div>
                                    <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-sm font-semibold'>Laura Hipster</h1>
                                                <p className='text-sm font-normal text-subColor'>October 03, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-base text-subColor font-normal'>
                                                Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                                            </p>
                                        </div>
                                        <div className='flex gap-[0.5rem] items-center'>
                                            <img src={reply} alt='Lỗi ảnh' />
                                            <span className='text-sm font-normal'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                                    <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                        <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
                                    </div>
                                    <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-sm font-semibold'>Laura Hipster</h1>
                                                <p className='text-sm font-normal text-subColor'>October 03, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-base text-subColor font-normal'>
                                                Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                                            </p>
                                        </div>
                                        <div className='flex gap-[0.5rem] items-center'>
                                            <img src={reply} alt='Lỗi ảnh' />
                                            <span className='text-sm font-normal'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[1.25rem] border-t pt-[1.25rem]'>
                                    <div className='h-[3.75rem] w-[3.75rem] bg-borderGray rounded-full'>
                                        <img src="https://www.figma.com/file/hON9ZENqGZHJ6UUl8FSRxR/EduPress---UI-Kit-for-Education-%26-Online-Learning-(Community)?type=design&node-id=1-723&mode=dev" alt=""/>
                                    </div>
                                    <div className='flex flex-1 flex-col gap-[0.5rem]'>
                                        <div className='flex-1'>
                                            <div className='flex justify-between'>
                                                <h1 className='text-sm font-semibold'>Laura Hipster</h1>
                                                <p className='text-sm font-normal text-subColor'>October 03, 2022</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-base text-subColor font-normal'>
                                                Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.
                                            </p>
                                        </div>
                                        <div className='flex gap-[0.5rem] items-center'>
                                            <img src={reply} alt='Lỗi ảnh' />
                                            <span className='text-sm font-normal'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Pagination/>
                        </div>
                    </div>,
        },
    ];

    return (
        <div className="flex flex-col">
            {/* Tạo các tab */}
            <div className="flex border-gray-200 overflow-hidden self-stretch rounded-t-xl border">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-[1.25rem] px-[1.88rem] text-base font-semibold flex-1 flex-shrink-0 basis-0 border-r last:border-r-0 ${
                            currentTab === index ? 'bg-bgGray text-primaryColor' : ''
                        }`}
                        onClick={() => setCurrentTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Hiển thị nội dung của tab hiện tại */}
            <div className="p-[1.88rem] bg-bgGray rounded-b-xl text-base">
                {tabs[currentTab].content}
            </div>
        </div>
    )
};

export default TabsCourse;
import React from 'react'
import BlogdetailData from '../../../DummyData/BlogdetailData'
import LeaveReply from '../../../components/LeaveReply'

const BlogDetailCard = () => {
    return (
        <div className='container realtive ' >
         <div className='flex'>
            {BlogdetailData.map((item) => (       
                <div>
                    <img src={item.image} className='box3' />
                    <div className='flex justify-between py-10'>
                        <div className='flex gap-3'>
                        <img src={item.authorimage} alt="" className='rounded-full w-10 h-10'/>
                        <p className='dark:text-white py-2 text-xl font-prata font-norma'>{item.authorname}</p>
                        </div>
                        <div>
                    <p className=' py-2 text-xl font-prata font-norma text-[#AAA]'>{item.date}</p>
                        </div>    
                    </div>
                    <div>
                        <h1 className='dark:text-white text-6xl py-10 font-blackerdisplay'>{item.headline}</h1>
                        <p className='dark:text-white text-lg font-Poppins text-justify'>{item.totalblog} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error itaque aut iusto eaque est. Minima, id pariatur reprehenderit repellat voluptates, et consequuntur maiores assumenda voluptate delectus laudantium? Officiis corporis tenetur a dolore modi vero <br /> commodi error velit distinctio itaque. Facilis incidunt aperiam voluptatem eveniet corporis error numquam harum hic voluptates consectetur quod nam voluptatum, repellendus blanditiis aut repudiandae distinctio! Dolorem ut veniam sapiente praesentium tempora in excepturi, alias vel quod quo laborum impedit et. Aperiam quas provident laborum ipsam sit aliquam. Laboriosam numquam vel porro perspiciatis deserunt minima dolor harum, ad est distinctio, fuga sed dicta molestiae perferendis nesciunt maiores voluptates. Assumenda aliquid autem expedita accusantium neque pariatur necessitatibus deserunt nobis fugit incidunt alias illo, maiores adipisci hic sit illum repellat dicta provident quod? Eum minus facere eaque, atque voluptates at natus maiores blanditiis inventore, reiciendis veritatis, ipsum dolores nisi? Deserunt a quasi facilis recusandae quas dolorum cum! Quasi accusamus qui ipsam libero, cupiditate error, explicabo perferendis illum expedita consequuntur blanditiis inventore aliquid voluptates maiores illo voluptas minima minus. Fugiat asperiores quam placeat quis totam <br /> dicta adipisci reprehenderit consectetur voluptas ratione, ab ipsum quas assumenda doloremque dolore! Enim alias facere minus excepturi reiciendis obcaecati eaque unde a libero, nemo velit, repudiandae dolores ex quibusdam consectetur? Eveniet consequatur non quos tempora amet ad ipsa illo similique, asperiores, <br/> <br/> officia natus tenetur repudiandae dolorum obcaecati exercitationem voluptatibus quo, eligendi qui voluptate doloremque veritatis? Fugiat sequi aperiam laboriosam vel quisquam explicabo provident illum eveniet incidunt illo vitae sunt consequuntur repudiandae, nobis quod ipsum dignissimos, porro veniam ratione perspiciatis cupiditate vero. Itaque facere optio, ipsa obcaecati magnam rem quos iste eaque <br/> <br/> adipisci recusandae quis ducimus ipsum exercitationem molestias quod. Facilis, perferendis. Repudiandae impedit modi quaerat perferendis, sapiente nemo explicabo sunt, repellat rerum sequi cum asperiores. Aspernatur asperiores excepturi odit blanditiis exercitationem ipsa similique, fugiat quas porro, explicabo ducimus? Obcaecati libero eaque aut illum asperiores deserunt inventore voluptatem! Quaerat, unde provident doloremque itaque dolorum ipsa, fuga delectus ut mollitia, molestiae placeat voluptatibus recusandae eius magnam incidunt autem vero optio? Distinctio in magni voluptas voluptatibus officiis nemo sint molestiae ducimus tempora quia voluptatum amet, nobis asperiores blanditiis dicta, eum neque at libero nesciunt, rem et suscipit. Libero repellat beatae sapiente, expedita <br/> officiis ex nam, quibusdam consectetur alias eligendi aspernatur laudantium soluta? Blanditiis dolore voluptas modi iste dolorum debitis nostrum id adipisci natus veniam laboriosam corrupti ullam, voluptatibus fugiat doloremque, vitae suscipit ab quisquam tempore, ipsam quasi. Tenetur eaque architecto fuga vel molestias ea ipsam facilis, delectus odio consequuntur reiciendis soluta in assumenda dolor a. Nemo magni amet architecto. Cumque saepe nemo ipsa eligendi id totam consequuntur tempora officiis, dicta enim accusamus non incidunt sequi corrupti explicabo quas similique possimus magnam delectus sit asperiores. Porro doloribus ad, mollitia aliquam consectetur molestiae voluptas, vitae sapiente tempore aut, excepturi animi harum? Consequatur modi quas nam, doloremque eaque quasi magni laboriosam enim! Debitis iste quis velit cumque obcaecati animi placeat nemo? Maiores dolorum accusamus doloremque, fugit laboriosam optio ex voluptatum labore porro sunt doloribus, nisi repellat placeat veniam libero quidem dolore.</p>
                    </div>
                    <div className='py-20'>
                        <LeaveReply/>
                    </div>
                    
                    
                </div>

            ))}
         </div>
       </div>
    )
}

export default BlogDetailCard

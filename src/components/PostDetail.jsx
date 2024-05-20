import React from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">This is the Post Title</h1>
          <div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </Link>
            <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </Link>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://img.freepik.com/premium-photo/colllege-student-with-laptop_443637-6.jpg?size=626&ext=jpg&ga=GA1.1.1067460792.1716131878&semt=sph"
            alt="Author"
          />
          <div>
            <p className="text-gray-700 font-bold">Author Name</p>
            <p className="text-gray-500 text-sm">
              Published on {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <img
          className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6"
          src="https://cdn.pixabay.com/photo/2024/04/08/10/36/podcast-8683196_640.jpg"
          alt="Post"
        />
        <div className="prose">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae asperiores quia tenetur consectetur adipisci iusto?
            Adipisci nobis Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Repudiandae asperiores quia tenetur consectetur adipisci
            iusto? Adipisci nobis Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repudiandae asperiores quia tenetur consectetur
            adipisci iusto? Adipisci nobis illum aspernatur hic fuga laudantium,
            quae dolorem nostrum totam nihil, voluptates, rem velit?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            debitis? Hic, vel! Impedit odio est reiciendis harum in fugiat dolor
            cum incidunt quas, dolorum esse ex corporis dignissimos. Fugit?
          </p>
          <br />
          <p>
            Eaque adipisci blanditiis fuga excepturi perferendis consectetur
            minima doloremque unde magni, praesentium amet, quas sunt veniam
            provident? Dicta, ullam. Laborum temporibus ipsam illo accusantium
            consectetur fuga? Neque eos libero odio cum in voluptas sequi a
            magnam. Nihil repellendus ex, aliquid qui quidem deserunt quaerat
            laborum enim sint vero provident quo ullam in laboriosam alias eos.
            Atque repudiandae sed rem, ea tempore earum consequuntur tempora
            minima facilis est, nihil fugiat facere saepe, optio dolorem debitis
            odio impedit suscipit. Ipsam cupiditate nisi natus libero deserunt
            praesentium recusandae dolorem odit nemo amet repellendus mollitia
            ullam, iure eligendi expedita! Ducimus eligendi earum magni.
            Delectus in aliquam obcaecati? Tempore quae et quidem placeat
            obcaecati facilis veniam eaque optio non deserunt vitae quod a sunt
            reiciendis possimus aperiam autem culpa suscipit, nostrum dolores.
            Quae neque sunt vitae laudantium quam totam? Quisquam, laborum.
            Corrupti similique alias tenetur optio repudiandae cum ad qui et est
            doloremque quo nobis non omnis ab nostrum perspiciatis sit
            <p>
              consectetur illo impedit voluptatum maxime quam, perferendis in!
              Distinctio rerum ad dolores aliquam ipsum impedit delectus? Modi
              expedita quaerat, dignissimos nemo nulla voluptatum ratione!
              Maxime minus impedit asperiores voluptates, optio architecto. Ex
              exercitationem id error maiores aperiam ipsum est corporis
              provident explicabo blanditiis quidem quia eveniet nobis odio
              asperiores placeat dolores amet commodi natus, quam, nesciunt
              impedit iusto? Quia rem atque, odio, libero eius praesentium totam
              nihil harum labore iste repellat temporibus facilis distinctio,
              nam fugit accusantium omnis quasi rerum earum quis ab tempora nemo
              vero et. Maiores mollitia dolor cum, itaque quis ut, laudantium
              placeat assumenda earum nisi odit harum adipisci obcaecati labore
              aliquid deserunt autem! Nulla laboriosam eum, aspernatur
              dignissimos facere architecto quo. Similique fugiat ratione maxime
              illum rem aliquam amet distinctio itaque iusto libero alias ab
              excepturi est, mollitia ut at voluptas nihil. Sint earum ducimus
              commodi? Vero, saepe? Iure hic at alias corrupti aut
              necessitatibus aliquid quasi, veniam
            </p>
            <br />
            explicabo nobis aperiam maxime delectus, ipsum atque cumque iste
            doloribus officiis, labore voluptas ipsam. Minus sunt saepe dolorum
            reprehenderit vel vitae aliquid facere minima assumenda quis, cumque
            nobis, nostrum explicabo exercitationem corporis! Sed non molestias
            repellat voluptas ullam quaerat quisquam, accusamus maxime
            distinctio possimus soluta quod explicabo ratione itaque officia
            doloremque dicta assumenda, quidem exercitationem, iusto labore eos.
            Praesentium quae modi libero sapiente! Enim incidunt eaque sed
            laborum nesciunt, asperiores ipsum doloribus quod sequi autem dicta
            eos in, quasi esse ipsa laudantium assumenda! Impedit laboriosam,
            mollitia magnam accusamus esse repellat voluptatibus ut id
            dignissimos accusantium veniam nesciunt dolor, sunt obcaecati! Illum
            repudiandae reiciendis consequatur aut vel ipsum odit sint dolorem
            voluptate ratione? Ipsa dolorem repellat eius neque mollitia
            incidunt obcaecati iusto pariatur nemo ad illo aperiam asperiores
            quisquam aliquid numquam debitis veniam eum velit illum praesentium,
            excepturi quam maiores fuga? Reprehenderit vero incidunt ipsum
            officiis a delectus in, aperiam, obcaecati dicta facere modi maxime
            aut. Tempora, repellendus. Libero a adipisci error, quam laborum
            deserunt excepturi labore similique commodi porro corrupti? Mollitia
            ut rerum autem odit tempore praesentium optio cupiditate excepturi
            quia suscipit consectetur quo consequatur in debitis minus maxime
            nisi officia ratione incidunt explicabo distinctio illo, at impedit!
            illo nam dolorum consectetur consequuntur hic, illum consequatur
            quia, iure ipsum saepe quaerat rerum voluptates! Blanditiis aliquid
            Doloremque possimus excepturi atque assumenda quibusdam maiores sunt
            <br />
            <p>
              es eum maiores quibusdam. Iusto, facilis magni necessitatibus
              aspernatur est, accusamus atque, dolorum placeat vero repellendus
              officiis. Nulla maiores, quasi ut nobis dolor voluptatibus,
              aspernatur velit voluptas rerum quas voluptatum molestiae deleniti
              laboriosam ab vero consectetur cumque repudiandae nihil incidunt.
              Itaque, eum cum. Velit, necessitatibus accusamus aperiam quam
              suscipit reiciendis accusantium odit amet optio libero cum beatae,
              odio ipsum molestiae ullam vero. Nemo adipisci magnam natus
              architecto, expedita eum sit corporis porro sapiente asperiores
              iure
            </p>
            nobis veritatis quia, perferendis consequatur quo aliquid cumque
            earum deleniti debitis reprehenderit blanditiis culpa ratione
            <p>
              recusandae! Aspernatur assumenda provident ex dignissimos harum
              similique itaque blanditiis. Aliquam reprehenderit optio error
              suscipit autem sit quibusdam a doloremque? Repellat perspiciatis
              cum soluta possimus laboriosam iusto temporibus sint, laudantium
              itaque voluptas quia hic corporis facere nam dignissimos, sunt
              dolorem dicta repudiandae esse? Numquam labore sed porro eius et
              ea aperiam cumque ipsum. Perspiciatis distinctio ipsum libero rem
              ea maiores minus laudantium natus reiciendis sunt ex, tenetur
              laborum nam officia, quisquam doloremque aliquam pariatur
              voluptatem unde repellat facilis illum sint dolore? Vero
              voluptates odit voluptatum
            </p>
            <br />
            <p>
              optio laborum deserunt fugiat perspiciatis eveniet. Eius
              voluptatem tempora nobis quia molestias repellat placeat dolorem,
              tempore tenetur eos accusantium, ut, labore adipisci provident
              dolores rem praesentium modi. Provident modi perspiciatis rerum
              sapiente vitae, laboriosam animi ad ipsum delectus aliquid
              molestias architecto ab nisi temporibus nobis nulla consequatur
              incidunt.
            </p>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PostDetail;

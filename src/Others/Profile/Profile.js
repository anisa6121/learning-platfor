import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/Context/AuthProvider/AuthProvider';

const Profile = () => {

const {user} = useContext(AuthContext)

    return (
		<div className="mx-auto mt-3 mb-3 flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-400 text-gray-100">
			<div className="mb-8 text-center">
				<h1 className="my-3 text-4xl font-bold">
					Profile 
				</h1>
			</div>

			<form
				
				noValidate=""
				action=""
				className="space-y-12 ng-untouched ng-pristine ng-valid"
			>
				<div className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm"
						>
							Name
						</label>
                        <input
                            
							defaultValue={user?.displayName}
							type="text"
							name="name"
							id="name"
							readOnly
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<label
							htmlFor="photoURL"
							className="block mb-2 text-sm"
						>
							Photo
						</label>
                        <input
                            readOnly
							defaultValue={user?.photoURL}
							type="text"
							name="photoURL"
							id="photoURL"
							placeholder="Photo"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm"
						>
							Email address
						</label>
                        <input
                            readOnly
                            defaultValue={user?.email}
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your Email Here"
							className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
							data-temp-mail-org="0"
						/>
                    </div>
         	</div>           
				
</form>
			
		</div>
    );
};

export default Profile;
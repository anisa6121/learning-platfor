import React from 'react';

const Blog = () => {
    return (
		<>
			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-pink-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-lime-500">
							1. why i using firebase.
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Firebase is a
							Backend-as-a-Service (Baas). It
							provides developers with a
							variety of tools and services
							to help them develop quality
							apps, grow their user base, and
							earn profit. It is built on
							Google's infrastructure.
							Firebase is categorized as a
							NoSQL database program, which
							stores data in JSON-like
							documents. In Firebase, a
							document is a set of key-value
							pairs defined by a schema. A
							group of documents makes up a
							collection. 1. Authentication
							It supports authentication
							using passwords, phone numbers,
							Google, Facebook, Twitter, and
							more. The Firebase
							Authentication (SDK) can be
							used to manually integrate one
							or more sign-in methods into an
							app. 2. Realtime database Data
							is synced across all clients in
							realtime and remains available
							even when an app goes offline.
							3. Hosting Firebase Hosting
							provides fast hosting for a web
							app; content is cached into
							content delivery networks
							worldwide. So i use it. <br />
							<p className="text-2xl font-bold text-lime-500">
								Different ways to
								Authenticate a Web
								Application
							</p>
							<h1 className="mt-2 text-black font-bold text-lg">
								various ways through
								which we can achieve
								authentication. <br />
								1. Cookie-Based <br />
								2. authentication <br />
								3. Token-Based <br />
								4. authentication Third{" "}
								<br />
								5. party access(OAuth,
								API-token) OpenId SAML
							</h1>
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-pink-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-lime-500">
							2. What is Cors?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Cross-Origin Resource Sharing
							(CORS) is an HTTP-header based
							mechanism that allows a server
							to indicate any origins
							(domain, scheme, or port) other
							than its own from which a
							browser should permit loading
							resources. CORS also relies on
							a mechanism by which browsers
							make a "preflight" request to
							the server hosting the
							cross-origin resource, in order
							to check that the server will
							permit the actual request. In
							that preflight, the browser
							sends headers that indicate the
							HTTP method and headers that
							will be used in the actual
							request.
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-pink-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-lime-500">
							3. How does Private Route Work?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Private Routes vary based on
							the Apps, For example,
							Dashboard, User Profile, App
							Settings, Home etc. In simple
							words, These routes can be
							accessed only after login. The
							private route component is
							similar to the public route,
							the only change is that
							redirect URL and authenticate
							condition. If the user is not
							authenticated he will be
							redirected to the login page
							and the user can only access
							the authenticated routes If he
							is authenticated (Logged in).
						</p>
					</div>
				</div>
			</div>

			<div className=" text-gray-100">
				<div className="m-3 container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-pink-200">
					<div className="mt-3">
						<p className="text-2xl font-bold text-lime-500">
							4. What is Node? How does Node Works?
						</p>
						<p className="mt-2 text-black font-bold text-lg">
							Node.js is a platform built on
							Chrome's JavaScript runtime for
							easily building fast and
							scalable network applications.
							Node.js uses an event-driven,
							non-blocking I/O model that
							makes it lightweight and
							efficient, perfect for
							data-intensive real-time
							applications that run across
							distributed devices. <br />
							Working of Node.js: Node.js
							accepts the request from the
							clients and sends the response,
							while working with the request
							node.js handles them with a
							single thread. To operate I/O
							operations or requests node.js
							use the concept of threads.
							Thread is a sequence of
							instructions that the server
							needs to perform. It runs
							parallel on the server to
							provide the information to
							multiple clients. Node.js is an
							event loop single-threaded
							language. It can handle
							concurrent requests with a
							single thread without blocking
							it for one request.
						</p>
					</div>
				</div>
			</div>
		</>
    );
};

export default Blog;
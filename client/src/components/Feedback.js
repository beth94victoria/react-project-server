import React from 'react';
import faker from 'faker';

const Feedback = (props) => {
	return (
		<div className="post">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="card card-body mb-3">
							<div className="row">
								<div className="col-md-2">
									<a href="profile.html">
										<img
											className="rounded-circle d-none d-md-block"
											src={faker.image.avatar()}
											alt=""
										/>
									</a>
									<br />
									<p className="text-center">{faker.name.findName()}</p>
								</div>
								<div className="col-md-10">
									<p className="lead">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis
										sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus
										distinctio cupiditate blanditiis dolor? Illo perferendis eveniet cum cupiditate
										aliquam?
									</p>
								</div>
							</div>
						</div>

						<div className="post-form mb-3">
							<div className="card card-info">
								<div className="card-header bg-success text-white">Say Somthing...</div>
								<div className="card-body">
									<form>
										<div className="form-group">
											<textarea
												className="form-control form-control-lg"
												placeholder="Create a post"
											/>
										</div>
										<button type="submit" className="btn btn-success">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>

						<div className="comments">
							<div className="card card-body mb-3">
								<div className="row">
									<div className="col-md-2">
										<a href="profile.html">
											<img
												className="rounded-circle d-none d-md-block"
												src={faker.image.avatar()}
												alt=""
											/>
										</a>
										<br />
										<p className="text-center">{faker.name.findName()}</p>
									</div>
									<div className="col-md-10">
										<p className="lead">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus
											corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis.
										</p>
									</div>
								</div>
							</div>

							<div className="card card-body mb-3">
								<div className="row">
									<div className="col-md-2">
										<a href="profile.html">
											<img
												className="rounded-circle d-none d-md-block"
												src={faker.image.avatar()}
												alt=""
											/>
										</a>
										<br />
										<p className="text-center">{faker.name.findName()}</p>
									</div>
									<div className="col-md-10">
										<p className="lead">
											{' '}
											Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
											eveniet cum cupiditate aliquam?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;

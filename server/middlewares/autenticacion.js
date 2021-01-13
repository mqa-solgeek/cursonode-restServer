const jwt = require('jsonwebtoken');

/*Verificar token*/
let verificaToken = (req, res, next)=>{
	let token = req.get('token');
	jwt.verify(token,process.env.SECRET,function(err,decoded){
		if (err) {
			return res.status(401).json({
				ok: false,
				err:{
					message:'Token no valido',
				}
			});
		}
		req.usuario = decoded.usuario;
		next();
	})
};
/*Verificar token*/


/*verifica ADMIN_ROLE*/
let verificaAdminRole = (req, res, next)=>{
	let usuario = req.usuario;
	if (usuario.role==='USER_ROLE') {
		return res.status(401).json({
				ok: false,
				err:{
					message:'Sin permiso para realizar esta acción',
				}
			});
	}
	next();
};
/*verifica ADMIN_ROLE*/

module.exports = {
	verificaToken,
	verificaAdminRole
}
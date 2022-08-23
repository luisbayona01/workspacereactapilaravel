<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

/**
 * Class ProductController
 * @package App\Http\Controllers
 */
class ProductController extends Controller
{
   
    public function index(Request $request)
    {   
        $usuariologeado=$request->usuariologeado;
        $productos =  Product::join('users', 'users.id', '=', 'products.usuarios_id')
        
        ->where('products.usuarios_id', '=', $usuariologeado)
        ->get(['products.*', 'users.name as usuario']);
      
           return $productos;

    }

    
    public function store(Request $request)
    {   
        $usuariologeado=$request->usuariologeado;
        $nameproducto=$request->name;
		$descripccion=$request->descripccion;
		
		//$usuarios_id = $usuariologeado
        $product = Product::create([

            'name' => $nameproducto,
            'descripccion' => $descripccion,
            'usuarios_id' =>  $usuariologeado,

    ]);

    return response()->json([
        'ok'    => true,
        'menssage'  => 'product created successfully'
        
    ]);
    }

  

   
    public function edit($id)
    { 
        $product = Product::find($id);
        return $product;
       
    }

    
    public function update(Request $request)
    {
        $id=$request->idproduct;
        $usuariologeado=$request->usuariologeado;
        $nameproducto=$request->name;
		$descripccion=$request->descripccion;
		
        $product = Product::find($id);
        $product->name =$nameproducto;
        $product->descripccion =$descripccion;
      
        $product->usuarios_id = $usuariologeado;

        if( $product->save()){

            return response()->json([
                'ok'    => true,
                'menssage'  => 'Product updated successfully'
                
            ]);
        }
        
       
    }

   
    public function destroy($id)
    {
        $product = Product::find($id)->delete();

     
            return response()->json([
                'ok'    => true,
                'menssage'  => 'Product deleted successfully'
                
            ]);    
    }
}

<?php
namespace Auth;

require './../vendor/autoload.php';
use Firebase\JWT\JWT;

class Auth {
    private static $key = 'My Secret Key';
    private static $expiration_time = 3600;
    private static $jwt_coding = 'HS256';

    public static function generateToken($user_id, $user_username, $user_email, $user_photo, $role_id) {
        $payload = array(
            "user_id" => $user_id,
            "user_username" => $user_username,
            "user_email" => $user_email,
            "user_photo" => $user_photo,
            "role_id" => $role_id,
            "exp" => time() + self::$expiration_time,
        );
        return JWT::encode($payload, self::$key, self::$jwt_coding);
    }

    public static function validateToken($token) {
        try {
            $decoded = JWT::decode($token, self::$key, self::$jwt_coding);
            return $decoded->user_id;
        } catch (Exception $e) {
            //Token Invalid Or expired
            return false;
        }
    }
}

?>
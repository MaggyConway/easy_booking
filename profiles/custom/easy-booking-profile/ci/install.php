<?php

/**
 * @file
 * Easy booking profile CI.
 */

$composer = json_decode(file_get_contents('drupal/composer.json'));
$path = 'web/profiles/easy_booking/composer.json';
$extra = (array) $composer->extra;
$extra['merge-plugin'] = (object) [
  'include' => [
    $path,
  ],
];
$composer->extra = (object) $extra;
file_put_contents('drupal/composer.json', json_encode($composer, JSON_PRETTY_PRINT));

/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.squareup.moshi.Json

/**
 * 
 *
 * @param key The key that was used to set the value on the keychain.
 */


data class SetKeychainEntryResponseV1 (

    /* The key that was used to set the value on the keychain. */
    @Json(name = "key")
    val key: kotlin.String

)


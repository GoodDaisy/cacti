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
 * @param fromBlock 
 * @param votes 
 */


data class Checkpoint (

    @Json(name = "fromBlock")
    val fromBlock: kotlin.Int,

    @Json(name = "votes")
    val votes: kotlin.String

)


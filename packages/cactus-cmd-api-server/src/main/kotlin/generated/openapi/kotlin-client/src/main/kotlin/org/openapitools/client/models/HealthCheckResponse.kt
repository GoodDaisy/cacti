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

import org.openapitools.client.models.MemoryUsage

import com.squareup.moshi.Json

/**
 * 
 *
 * @param createdAt 
 * @param memoryUsage 
 * @param success 
 */


data class HealthCheckResponse (

    @Json(name = "createdAt")
    val createdAt: kotlin.String,

    @Json(name = "memoryUsage")
    val memoryUsage: MemoryUsage,

    @Json(name = "success")
    val success: kotlin.Boolean? = null

)


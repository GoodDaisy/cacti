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
 * @param sessionID 
 * @param messageType 
 * @param clientIdentityPubkey 
 * @param serverIdentityPubkey 
 * @param hashCommitFinalAck 
 * @param signature 
 * @param hashTransferCommence 
 * @param sequenceNumber 
 * @param clientTransferNumber 
 */


data class TransferCompleteV1Request (

    @Json(name = "sessionID")
    val sessionID: kotlin.String,

    @Json(name = "messageType")
    val messageType: kotlin.String,

    @Json(name = "clientIdentityPubkey")
    val clientIdentityPubkey: kotlin.String,

    @Json(name = "serverIdentityPubkey")
    val serverIdentityPubkey: kotlin.String,

    @Json(name = "hashCommitFinalAck")
    val hashCommitFinalAck: kotlin.String,

    @Json(name = "signature")
    val signature: kotlin.String,

    @Json(name = "hashTransferCommence")
    val hashTransferCommence: kotlin.String,

    @Json(name = "sequenceNumber")
    val sequenceNumber: java.math.BigDecimal,

    @Json(name = "clientTransferNumber")
    val clientTransferNumber: kotlin.Int? = null

)


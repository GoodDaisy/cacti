package org.hyperledger.cactus.plugin.ledger.connector.corda.server.model

import java.util.Objects
import com.fasterxml.jackson.annotation.JsonProperty
import org.hyperledger.cactus.plugin.ledger.connector.corda.server.model.NodeDiagnosticInfo
import javax.validation.constraints.DecimalMax
import javax.validation.constraints.DecimalMin
import javax.validation.constraints.Email
import javax.validation.constraints.Max
import javax.validation.constraints.Min
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size
import javax.validation.Valid
import io.swagger.v3.oas.annotations.media.Schema

/**
 * 
 * @param nodeDiagnosticInfo 
 */
data class DiagnoseNodeV1Response(

    @field:Valid
    @Schema(example = "null", required = true, description = "")
    @get:JsonProperty("nodeDiagnosticInfo", required = true) val nodeDiagnosticInfo: NodeDiagnosticInfo
) {

}


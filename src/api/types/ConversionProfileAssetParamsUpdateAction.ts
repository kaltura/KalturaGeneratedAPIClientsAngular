
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfileAssetParams } from './KalturaConversionProfileAssetParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ConversionProfileAssetParamsUpdateActionArgs  extends KalturaRequestArgs {
    conversionProfileId : number;
	assetParamsId : number;
	conversionProfileAssetParams : KalturaConversionProfileAssetParams;
}

/**
 * Build request payload for service 'conversionProfileAssetParams' action 'update'.
 *
 * Usage: Update asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParams
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ConversionProfileAssetParamsUpdateAction extends KalturaRequest<KalturaConversionProfileAssetParams> {

    conversionProfileId : number;
	assetParamsId : number;
	conversionProfileAssetParams : KalturaConversionProfileAssetParams;

    constructor(data : ConversionProfileAssetParamsUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaConversionProfileAssetParams', responseConstructor : KalturaConversionProfileAssetParams  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'conversionprofileassetparams' },
				action : { type : 'c', default : 'update' },
				conversionProfileId : { type : 'n' },
				assetParamsId : { type : 'n' },
				conversionProfileAssetParams : { type : 'o', subTypeConstructor : KalturaConversionProfileAssetParams, subType : 'KalturaConversionProfileAssetParams' }
            }
        );
        return result;
    }
}

